import React from 'react';
import { Tooltip, Container, Row, Fa } from 'mdbreact';


class TooltipsPage extends React.Component {


  render() {
    const style = {display: 'inline-block', maxWidth: '50vh'}
    return (
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Tooltips</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/advanced/tooltips/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <div className="m-5 text-center">
          <Tooltip
            placement="top"
            componentClass="btn btn-primary"
            tag="div"
            component="button"
            tooltipContent="Tooltip on top">
              Tooltip on top
          </Tooltip>
          <div style={style} className="text-right">
          <Tooltip
            placement="left"
            componentClass="btn btn-primary"
            tag="div"
            component="button"
            tooltipContent="Tooltip on left">
              Tooltip on left
          </Tooltip>
          </div>
          <div style={style} className="text-left">
          <Tooltip
            placement="right"
            componentClass="btn btn-primary"
            tag="div"
            component="button"
            tooltipContent="Tooltip on right">
              Tooltip on right
          </Tooltip>
          </div>
          <Tooltip
            placement="bottom"
            componentClass="btn btn-primary"
            tag="div"
            component="button"
            tooltipContent="Tooltip on bottom">
              Tooltip on bottom
          </Tooltip>
        </div>
      </Container>
    );
  }
}
export default TooltipsPage;
