{
    /*import { Input } from './textField';
interface Props {
    text?: string;
    [rest: string]: any;
}

const TextFieldComponent = ({ name, text, ...rest }: Props) => {
    return <Input {...rest} placeholder={text} type="text" name={name} />;
};
export default TextFieldComponent; */
}
import { TextArea, Input } from './textField'; // Import your Input component

interface Props {
    text?: string;
    enableNewLines?: boolean;
    [rest: string]: any;
}

const TextFieldComponent = ({ name, text, enableNewLines, ...rest }: Props) => {
    if (enableNewLines) {
        return (
            <TextArea
                {...rest}
                placeholder={text}
                name={name}
                onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        const cursorPos = e.target.selectionStart;
                        const newValue =
                            e.target.value.slice(0, cursorPos) +
                            '\n' +
                            e.target.value.slice(cursorPos);
                        e.target.value = newValue;

                        if (rest.onChange) {
                            rest.onChange(e); // Call the onChange handler
                        }
                    }
                }}
            />
        );
    }

    // Render your Input component for non-message fields
    return <Input {...rest} placeholder={text} type="text" name={name} />;
};

export default TextFieldComponent;
