import Card from './Card'

function Cards() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Cards