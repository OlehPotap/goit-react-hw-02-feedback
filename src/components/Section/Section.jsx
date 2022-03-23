
import './section.css'

const Section = ({title, children}={}) => {
    return (
        <section className="section">{title}
        {children}</section>
    )
}

export default Section;