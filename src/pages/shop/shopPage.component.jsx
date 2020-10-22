import React from 'react';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';

import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div clasName='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage;