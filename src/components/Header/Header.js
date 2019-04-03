import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components/macro";
const Header = (props)=>{
    const Divstyle = styled.div`
      background : tomato;
      color: white;
      padding: 10px 20px;
      width: 100%;
    `;
    const {headerName,headerDivStyle} = props;
    const HeaderDivElement = headerDivStyle ? headerDivStyle : Divstyle;
   return(
     <Fragment>
        <HeaderDivElement>
            {headerName}
        </HeaderDivElement>
     </Fragment>  
   );
};

PropTypes.defaultProps={
    headerName: "Default Header"
};

PropTypes.PropTypes={
 headerName: PropTypes.string.isRequired,
 headerStyle: PropTypes.object
};

export default Header;