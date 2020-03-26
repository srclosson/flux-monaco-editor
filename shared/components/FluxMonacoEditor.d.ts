import { FC } from 'react';
import { OnChangeScript } from 'src/types/flux';
import { EditorType } from 'src/types';
import './FluxMonacoEditor.scss';
interface Props {
    script: string;
    onChangeScript: OnChangeScript;
    onSubmitScript?: () => void;
    setEditorInstance?: (editor: EditorType) => void;
}
declare const FluxEditorMonaco: FC<Props>;
export default FluxEditorMonaco;
