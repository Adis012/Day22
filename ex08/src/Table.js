class Table extends Component {
    render() {
        const {characterDate} = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterDate={characterDate} />
            </table>
        )
    }
}

export default Table;