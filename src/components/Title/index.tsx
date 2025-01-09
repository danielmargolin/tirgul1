type TitleProps = {
    children: string;
    color?: string;
}

export const Title = ({color, children}: TitleProps) => {
    return <div>
        <h1 style={{color: color}}>{children}</h1>
    </div>
}