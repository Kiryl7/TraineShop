export default Paginate;
declare function Paginate({ pages, page, isAdmin, keyword }: {
    pages: any;
    page: any;
    isAdmin?: boolean | undefined;
    keyword?: string | undefined;
}): false | JSX.Element;
