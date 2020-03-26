import React, { PureComponent, HTMLProps } from 'react';

export interface Props extends HTMLProps<HTMLTextAreaElement> {};

export default class TextArea extends PureComponent<Props> {
  
  render() {
    return (
      <div>
        <textarea {...this.props} />
      </div>
    );
  }  
};
