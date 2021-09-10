export default Rating;
declare function Rating({ value, text, color }: {
    value: any;
    text: any;
    color: any;
}): JSX.Element;
declare namespace Rating {
    namespace defaultProps {
        const color: string;
    }
}
