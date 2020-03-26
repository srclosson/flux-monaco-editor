import { PureComponent, HTMLProps } from 'react';
export interface Props extends HTMLProps<HTMLTextAreaElement> {
}
export default class TextArea extends PureComponent<Props> {
    render(): JSX.Element;
}
