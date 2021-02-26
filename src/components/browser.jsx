import React, { Component } from "react";
import { Progress, Card, Tooltip, Modal } from "antd";
import { getItems } from "./../services/itemsService";

const { Meta } = Card;
class Browser extends Component {

    state = {
        items: [],
        modalVisible: false,
        visibleItem: null
    }
  
  componentDidMount = async() => {
      const items = await getItems();
      console.log(items);
    this.setState({items: items});
  }

  showModal = (item) => {
      this.setState({modalVisible: true, visibleItem: item});
  }

  hideModal = () => {
      this.setState({modalVisible: false})
  }

  render() {
      const {items, modalVisible, visibleItem} = this.state;
    return (
      <React.Fragment>
        


        <div className="jumbotron-fluid my-0"
            style={{backgroundImage: 'url(https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2020/07/20191024_CL_DJA_178.jpg?itok=QmoPCsVE)',
      width: '100%', height: 300, backgroundPositionY:-640}}>
    </div>

    <div className="container-fluid m-0 p-0" style={{backgroundColor: '#f5f5f5'}}>


<div className="container pt-4">
          <header className="jumbotron mt-0 py-3 pt-2">

          
 

            <h1 className="display-3">Welcome to TigerReTail!</h1>
            <p className="lead">
              Browse, post, and request goods all in one place!
            </p>
          </header>

          <div className="container">
          <div className="row text-center d-flex justify-content-around">
            
                {items.map((item) => (
                    <div class="col-sm my-2">
                    <Tooltip title={item.description}>
                    <Card
                        key={item.id}
                        hoverable
                        style={{ width: "200px", height: "200px" }}
                        cover={<img alt={item.name} src={item.image} style={{height: 200, objectFit: 'cover'}}/>}
                        className="border rounded"
                        actions={[
                            <Tooltip title="More">
                                <a href="#">
                                <i className="fas fa-info-circle"></i>
                                </a>
                            </Tooltip>,
                            <Tooltip title="Contact">
                                <a href="#">
                                <i className="fas fa-id-card"></i>
                                </a>
                            </Tooltip>,
                        ]}
                        onClick={() => this.showModal(item)}
                    >
                    <Meta title={item.name} />
                    <Progress
      strokeColor={{
        from: '#f57c78',
        to: '#00ff33',
      }}
      percent={item.quality * 100}
    />
                </Card></Tooltip>
                </div>

              ))}

<Modal title={visibleItem ? visibleItem.name: ''} visible={modalVisible} onOk={this.hideModal} onCancel={this.hideModal}>
        <p>Cost: {visibleItem ? visibleItem.price : ''}</p>
        <p>Quality: {visibleItem ? visibleItem.quality : ''}</p>
        <p>Description: {visibleItem ? visibleItem.description : ''}</p>
      </Modal>
              
            </div>
            
          </div>
</div>
          </div> 
        
      </React.Fragment>
    );
  }
}

export default Browser;
