import React from 'react'
export const DashboardDataContext= React.createContext(null)
function DashboardContext({children}) {
    let CardData=[{
        color:"primary",
        title:"Earnings(Monthly)",
        value:"$40,000",
        icon:"fa-calender"
    },
{
        color:"success",
        title:"Earnings(Annual)",
        value:"$2,15,000",
        icon:"fa-dollar-sign"
},
{
        isProgressBar:true,
        color:"info",
        title:"Tasks",
        value:"50%",
        icon:"fa-clipboard-list"
},{
    color:"warning",
        title:"Pending Requests",
        value:"$40,000",
        icon:"fa-comments"
}]
  return (
    <DashboardDataContext.Provider value={{CardData}}>
{children}
    </DashboardDataContext.Provider>
  )
}

export default DashboardContext