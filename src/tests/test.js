/* eslint-disable */

import React from 'react';
import {
  Simulate,
  render,
  wait
} from 'react-testing-library';

import ReactFileLoad from '../index';

describe('ExampleComponent', () => {
  it('should render', () => {
    render(<ReactFileLoad text='x' />);
  });

  it('should have correct default finish color', async () => {
    const { getByLabelText, getByText } = render(
      <ReactFileLoad text='My label text' />
    );

    const file = new File(
      [
        'Chuck Norris once urinated in a semi trucks gas tank as a joke. That truck is now known as Optimus Prime.'
      ],
      'chucknorris.txt'
    );

    const fileInputField = getByLabelText('My label text');
    Simulate.change(fileInputField, { target: { files: [file] } });

    await wait(() => {
      const label = getByText('My label text');
      expect(label.style.background).toBe('rgb(44, 88, 136)'); // 'rgb(44, 88, 136)' == #2c5888
    });
  });

  it('should load file data', async () => {
    const onDataChunkCallback = jest.fn();
    const { getByLabelText } = render(
      <ReactFileLoad text='My label text' onDataChunk={onDataChunkCallback} />
    );

    const fileContent =
      'Chuck Norris once urinated in a semi trucks gas tank as a joke. That truck is now known as Optimus Prime.';
    const file = new File([fileContent], 'chucknorris.txt');

    const fileInputField = getByLabelText('My label text');
    Simulate.change(fileInputField, { target: { files: [file] } });

    await wait(() => {
      expect(onDataChunkCallback.mock.calls.length).toBe(1);
      expect(onDataChunkCallback.mock.calls[0][0]).toBe(fileContent);
    });
  });

  it('should call onChange, onProgress, onFinished callbacks', async () => {
    const onProgressCallback = jest.fn();
    const onChangeCallback = jest.fn();
    const onFinishedCallback = jest.fn();

    const { getByLabelText } = render(
      <ReactFileLoad text='My label text' onProgress={onProgressCallback} onChange={onChangeCallback} onFinished={onFinishedCallback}/>
    );

    const fileContent =
      'Chuck Norris once urinated in a semi trucks gas tank as a joke. That truck is now known as Optimus Prime.';
    const file = new File([fileContent], 'chucknorris.txt');

    const fileInputField = getByLabelText('My label text');
    Simulate.change(fileInputField, { target: { files: [file] } });

    await wait(() => {
      expect(onProgressCallback.mock.calls.length).toBe(1);
      expect(onProgressCallback.mock.calls[0][0]).toBe(100);
    });
  });

  it('should respect readery config', async () => {
    const onDataChunkCallback = jest.fn();
    const { getByLabelText } = render(
      <ReactFileLoad text='My label text' onDataChunk={onDataChunkCallback} readeryConfig={{ splitBy: ',', encoding: 'UTF-8' }}/>
    );

    const fileContent =
      'Peter, Adam, Monique';
    const file = new File([fileContent], 'file.csv');

    const fileInputField = getByLabelText('My label text');
    Simulate.change(fileInputField, { target: { files: [file] } });

    await wait(() => {
      expect(onDataChunkCallback.mock.calls.length).toBe(3);
      expect(onDataChunkCallback.mock.calls[0][0]).toBe('Peter');
      expect(onDataChunkCallback.mock.calls[1][0].trim()).toBe('Adam');
      expect(onDataChunkCallback.mock.calls[2][0].trim()).toBe('Monique');
    });
  });
});