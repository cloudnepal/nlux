import {ComposerStatus} from '../../../../../shared/src/ui/Composer/props';

export type ComposerProps = {
    status: ComposerStatus;
    prompt?: string;
    placeholder?: string;
    autoFocus?: boolean;

    hasValidInput?: boolean;
    submitShortcut?: 'Enter' | 'CommandEnter';

    onChange?: (value: string) => void;
    onSubmit?: () => void;
};