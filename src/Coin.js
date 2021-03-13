import React from 'react'

const Coin = ({name,image,symbol,price,volume,priceChange,marketcap}) => {
    return (
        <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <img src={image} alt="cryto"/>
                        <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <div className="coin-price">${price}</div>
                        <div className="coin-volume">{volume.toLocaleString()}</div>
                        {
                            priceChange < 0 ? 
                            (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>)
                            :
                             (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
                        }
                        <div className="coin-marketcap">
                            Mkt Cap: ${marketcap.toLocaleString()}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Coin
