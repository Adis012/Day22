class App extends Component {
    render() {
        const characters = [
            {
                firstName: 'Lary',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',
            },
            {
                firstName: 'Alan',
                lastName: 'Turing'
            },
        ]

        return (
            <div className="container">
                <Table characterDate={characters} />
            </div>
        )
    }
}
export default App;