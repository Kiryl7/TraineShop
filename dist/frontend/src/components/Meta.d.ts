export default Meta
declare function Meta({ title, description, keywords }: { title: any; description: any; keywords: any }): JSX.Element
declare namespace Meta {
  namespace defaultProps {
    const title: string
    const description: string
    const keywords: string
  }
}
