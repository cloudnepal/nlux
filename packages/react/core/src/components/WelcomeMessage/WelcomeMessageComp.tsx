import {
    className as compWelcomeMessageClassName,
    personaNameClassName as compWelcomeMessagePersonaNameClassName,
} from '../../../../../shared/src/components/WelcomeMessage/create';
import {
    welcomeMessageTextClassName as compWelcomeMessageTextClassName,
} from '../../../../../shared/src/components/WelcomeMessage/utils/updateWelcomeMessageText';
import {AvatarComp} from '../Avatar/AvatarComp';
import {WelcomeMessageProps} from './props';

export const WelcomeMessageComp = (props: WelcomeMessageProps) => {
    return (
        <div className={compWelcomeMessageClassName}>
            <AvatarComp
                avatar={props.avatar}
                name={props.name}
            />
            <div className={compWelcomeMessagePersonaNameClassName}>
                {props.name}
            </div>
            {props.message && (
                <div className={compWelcomeMessageTextClassName}>{props.message}</div>
            )}
        </div>
    );
};