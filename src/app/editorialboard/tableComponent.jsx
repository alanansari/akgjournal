const TableComponent=(props)=>{
return(
    <>
              <div className="w-full sm:w-[254px] ">
              <p className="text-base font-bold">{props.name}</p>
              <p className="text-sm">{props.designation}</p>
              <p className="text-sm">{props.university}</p>
              <p className="text-sm">{props.place}</p>
              </div>
    </>
)
}

export default TableComponent;