import React, {Component} from 'react'
import CountUp from 'react-countup';


class CountUpFooter extends Component{
    render(){
        return(
            <div className="countUp">
                <div className="itemCountUp">
                <CountUp className="countItem" start={0} end={1000} duration={15}/>
                {/* delay={second} ko cần start*/}
                <h2>HOME</h2>
                </div>
                <div className="itemCountUp">
                <CountUp className="countItem" start={0} end={365} duration={15}/>
                <h2>Happy Customer</h2>
                </div>
                <div className="itemCountUp">
                <CountUp className="countItem" start={0} end={678} duration={15}/>
                <h2>Finished Project</h2>
                </div>
                <div className="itemCountUp">
                <CountUp className="countItem" start={0} end={752} duration={15}/>
                <h2>Working Day</h2>
                </div>
            </div>
        )
    }
}

export default CountUpFooter;