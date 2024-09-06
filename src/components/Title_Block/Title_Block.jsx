import "./titleblock.css"

const Title_Block = (props) => {
    return ( 
        <div className="row flex items-center w-full">
          <div className="block__title">
            <p className="text-4xl font-semibold w-fit flex items-center justify-center py-1 px-3 rounded-lg">
              {props.title}
            </p>
          </div>
          <div className="block__subtitle">
            <p className="pl-10">
              {props.subtitle}
            </p>
          </div>
        </div>
     );
}
 
export default Title_Block;