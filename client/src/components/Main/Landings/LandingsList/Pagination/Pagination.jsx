import React, { useEffect, useState } from "react";
import { v4 as uuidV4 } from 'uuid';




const Pagination = (props) => {
  
/* console.log(props)

  const [landings, setLandings] = useState(props.data)
  console.log(landings)
  const totalPagesForLandings = Math.ceil(landings.length / 10)
  const [activePage, setActivePage] = useState(1);
  const [landingsToDisplay, setLandingsToDisplay] = useState([]);


  useEffect(() => {
    //establece los landings to display
    setLandingsToDisplay(landings.slice((activePage * 10) - 10, activePage * 10))

  }, [activePage])

  const handlePrevious = () => {
    setActivePage(activePage - 1);

  }

  const handleNext = () => {
    setActivePage(activePage + 1);
  }
 

 */
  return <section className="pagination">
    <h1>Todos los landings</h1>
    {/* <section>
   
    

    {landings.length>0 ? landingsToDisplay.map(landing => <LandingsCard data={landing} key={uuidV4()} />) : ""}
    </section>
    {activePage > 1 ? <button className="button1" onClick={handlePrevious}>Previous</button> : ""}

    {totalPagesForLandings.map((pages, i) => <div>{i}</div>)}

    {activePage !== landings.length ? <button className="button1" onClick={handleNext}>Next</button> : ""}
 */}

  </section>;

};

export default Pagination;
