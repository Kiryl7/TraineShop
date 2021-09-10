export default Message;
declare function Message({ variant, children }: {
    variant: any;
    children: any;
}): JSX.Element;
declare namespace Message {
    namespace defaultProps {
        const variant: string;
    }
}
