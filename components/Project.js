export default function Project(props) {
    return <div className="mx-auto text-center p-8 xl:p-0 xl:py-12 text-primary-font max-w-7xl">
        <div className="md:flex md:items-center">
            <div className={`md:w-2/5 md:mx-8 mb-8 md:order-${props.textRight?"1":"0"}`}>
                <h3 className="text-3xl font-bold text-primary-bold mb-4">{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
            {props.media}
        </div>
    </div>
}
