import "./titleblock.css"

const Title_Block = (props) => {
    return ( 
        <div className="row flex items-center w-full md:flex-row flex-col flex-nowrap text-center">
          <div className="block__title flex-nowrap">
            <p className="text-2xl sm:text-4xl md:text-4xl font-semibold w-fit flex items-center justify-center py-1 px-3 rounded-lg flex-nowrap">
              {props.title}
            </p>
          </div>
          <div className="block__subtitle md:pt-0 pt-4 md:text-start text-center">
            <p className="md:pl-10 subtitle">
              {props.subtitle}
            </p>
          </div>
        </div>
     );
}
 
export default Title_Block;