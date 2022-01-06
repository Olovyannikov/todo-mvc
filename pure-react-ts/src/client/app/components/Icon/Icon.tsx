import cn from "classnames";
import {IconProps} from "./Icon.props";
import sprite from '../../../resources/img/sprite/sprite.svg';

export const Icon = ({icon, width, height, className, ...props}: IconProps): JSX.Element => {
    return (
        <svg className={cn(className)} width={width} height={height} {...props}>
            <use href={`${sprite}#${icon}`}/>
        </svg>
    )
}