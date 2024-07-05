
import {Component} from "react"

import {v4 as uuidv4} from "uuid"

import {Avatar} from '@adobe/react-spectrum'

import Edit from '@spectrum-icons/workflow/Edit';

import Delete from '@spectrum-icons/workflow/Delete';

import { IoMdHome } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

import "./index.css"


const dummyData=[
  
  {
  id:uuidv4(),
  name:"Indra Gandhi International Airport",
  country:"India",
  code:"DEL",
  terminals:[{
    id:uuidv4(),
    termianle:"Terminal",
    terminalImage:"https://i.ibb.co/1LWvVLr/Image.png",
    description:"Optional metadata should be two lines.",
    count:0,
  },
  {
    id:uuidv4(),
    termianle:"Terminal",
    terminalImage:"https://i.ibb.co/1LWvVLr/Image.png",
    description:"Optional metadata should be two lines.",
    count:0,
  }
  ]
}
,
{
  id:uuidv4(),
  name:"Dubai International Airport",
  country:"UAE",
  code:"DXB",
  terminals:[{
    id:uuidv4(),
    termianle:"Terminal",
    terminalImage:"https://i.ibb.co/1LWvVLr/Image.png",
    description:"Optional metadata should be two lines.",
    count:0,
  }]
}
,
{
  id:uuidv4(),
  name:"Heathrow Airport",
  country:"England",
  code:"LHR",
  terminals:[{
    id:uuidv4(),
    termianle:"Terminal",
    terminalImage:"https://i.ibb.co/1LWvVLr/Image.png",
    description:"Optional metadata should be two lines.",
    count:0,
  }]
}
,
{
  id:uuidv4(),
  name:"Istanbul Airport",
  country:"Turkey",
  code:"IST",
  terminals:[{
    id:uuidv4(),
    termianle:"Terminal",
    terminalImage:"https://i.ibb.co/1LWvVLr/Image.png",
    description:"Optional metadata should be two lines.",
    count:0,
  }]
}
,
{
  id:uuidv4(),
  name:"Rajiv Gandhi International Airport",
  country:"Texas",
  code:"DFW",
  terminals:[{
    id:uuidv4(),
    termianle:"Terminal",
    terminalImage:"https://i.ibb.co/1LWvVLr/Image.png",
    description:"Optional metadata should be two lines.",
    count:0,
  }]
}




]


class Home extends Component{

  state={selectAriport:"Airports",storageOfDummyData:dummyData,showAdding:false,airPortName:"",countryName:"",countryCode:""}


  changeToAirport=()=>{
    this.setState({selectAriport:"Airports"})
  }

  changeToVideos=()=>{
    this.setState({selectAriport:"Videos"})
  }


  deleteTheItem=(id)=>{
    console.log(id)
    const {storageOfDummyData} = this.state
    const deletFilter=storageOfDummyData.filter((each)=>each.id!==id)
    this.setState({storageOfDummyData:deletFilter})
  }

  addToStorage=()=>{
    this.setState({showAdding:true})
  }

  cancelToDummyStorage=()=>{
    this.setState({showAdding:false,airPortName:"",countryName:"",countryCode:""})
  }

  addAirPortCountry=(event)=>{
    this.setState({countryName:event.target.value})
  }

  addAirPortCountryCode=(event)=>{
    this.setState({countryCode:event.target.value})
  }

  addAirPortName=(event)=>{
    this.setState({airPortName:event.target.value})
  }

  addDataToDummyStorage=()=>{
    const {countryCode,airPortName,countryName,storageOfDummyData} = this.state
    const newData={
      id:uuidv4(),
      name:airPortName,
      country:countryName,
      code:countryCode,
      terminals:[{
        id:uuidv4(),
        termianle:"Terminal",
        terminalImage:"https://i.ibb.co/1LWvVLr/Image.png",
        description:"Optional metadata should be two lines.",
        count:0,
      }]
    }
    const newAdding=[...storageOfDummyData,newData]
    console.log(newAdding)
    this.setState({storageOfDummyData:newAdding,showAdding:false,airPortName:"",countryName:"",countryCode:""})
  }
  render(){
        const{selectAriport,storageOfDummyData,showAdding,airPortName,countryCode,countryName} = this.state;
    return(
      <div>
        
       
       
              <div className="nav-bar">
            <h1>hava havai</h1>
            <div>
            <Avatar src="https://s3-alpha-sig.figma.com/img/fb96/d6f0/4db45efd3340ef80a549531cff981068?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5tzqHUVS7uR9BzFcIld-swG7raSI94tfM42bBtryEjxPSqGmrmX3uel~Qp53S6HFWuXOMVMfqmBzy9H~E1EUwgVEZiPCPddD8wG6v3zAK39xdY6bdyZ-T061QrT0-tGkjo2a36PlKkRbIXrI5eayUy-RoZQTFb~0p3nDPfZCHdgH-q-70gwpIIUfpN3CH44vsv4azr21dPRH9zDoOY9xyX3qW6-8cJ87IgSB~nhdhvpXwHlJr6oKwrE9rdk6~qp09ZUIFxaw7rdMlvEAnGdV4WBq5oSz-EZg3yPf5jxs8h0Tkx2ZpxWRdQXVFEPD8a2t97j1FoMb6GRRZap8geY3A__"  size={32} alt="default Adobe avatar" />
            </div>
       
        </div>

        <br/>





        <div className="home-page">


            <div className="left-side">


                <h1 className="home-header"><IoMdHome /> &nbsp;Home</h1>
                <h1 className="home-dashboard"><PiDotsNineBold /> &nbsp; Dashboard</h1>

                <br/>

                <div className="home-page-left-content">



                    <div className="left-side-selection">
                        <div className="services-ul">Services
                        <p className="list-one" onClick={()=>{this.changeToAirport()}} style={{background:selectAriport==="Airports"?"aquamarine":"transparent"}}>Airports</p>
                        <p className="list-two" onClick={()=>{this.changeToVideos()}} style={{background:selectAriport==="Videos"?"aquamarine":"transparent"}}>Videos</p>
                        </div>

                        <br/>
                 

                        <div className="Others">Others
                          <p className="list-1">list 1</p>
                          <p className="list-2">list 2</p>
                          <p className="list-3">list 3</p>
                        </div>



                    </div>


                </div>




            </div>



            <div className="right-side">


              <div className="right-side-content">

                  <div className="airports-add-item-container">
                    <h2>Airports</h2>
                    <div>
                      <button onClick={()=>{this.addToStorage()}} className="add-new-button" type="button">+ Add new</button>
                    </div>
                  </div>

                  <div className={showAdding?"show":"hide"}>
                    <input className="add-airport-name" value={airPortName} onChange={this.addAirPortName} type="text" placeholder="Enter a airport name"/>
                    &nbsp;
                    <input className="add-airport-country" value={countryName} onChange={this.addAirPortCountry} type="text" placeholder="Enter a airport country"/>
                    &nbsp;
                    <input className="add-airport-code" value={countryCode} onChange={this.addAirPortCountryCode} type="text" placeholder="Enter a airport code"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="cancel" onClick={()=>{this.cancelToDummyStorage()}} type="button">Cancel</button>
                    &nbsp;&nbsp;
                    <button className="submit" onClick={()=>{this.addDataToDummyStorage()}} type="button">Submit</button>

                  </div>
                  <br/>

              <div className="airports-list">

                <div>

                  <div className="table-header">
                    <div>
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">&nbsp;All Airports</label>
                    </div>
                    <div className="table-header-content">
                      <p>Country</p>
                      <p>Code</p>
                      <p>Terminals</p>
                    </div>
                  </div>

                  {
                    storageOfDummyData.map((each)=>(
                      <div className="each-airport-conatiner" key={each.id}>
                        
                        <div className="each-card">
                        <div className="checkbox-for-each-airport"> 
                          <div>
                          <input type="checkbox" name={each.name} value={each.value}/>
                          </div>
                          <p>&nbsp;{each.name}</p>
                        </div>

                        <div className="each-airport-details">
                          <p className="country">{each.country}</p>
                          <p className="code">{each.code}</p>
                          <p className="terminals">{each.terminals.length}</p>

                        
                        </div>

                        </div>

                        <div className="edit-delete">
                          <Edit width={22}/> &nbsp;&nbsp;&nbsp;
                         <button className="delete-button" type="button" onClick={()=>{this.deleteTheItem(each.id)}} >
                         <Delete width={22}/>
                          </button> 
                          </div>
                         
                       
                      </div>
                    ))
                  }

               

             




                </div>
              </div>



              </div>

            </div>

            


     

        </div>























      </div>
    )
  }
}


export default Home;