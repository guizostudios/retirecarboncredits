import { useState } from 'react';

const RetireNFT = props => {

    const [tokenid, setTokenID] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('')



    const submitHandler = (event) => {
        event.preventDefault();
        props.retireToNFT(tokenid, description, amount);
        setTokenID('');
        setDescription('');
        setAmount('');
    }


    return (

        <section id = "1" className=" pt-120 pb-120" style = {{backgroundColor: "#CFE1E8"}}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title" style = {{color: "#2C4B5B"}}>Retire NFT</h2>
                </div>
                <form className="nft-form" onSubmit = {submitHandler}>
                    <div className="content-block">
                    </div>
                    <div className="content-block">
                        <div className="row">
                            <div className="col-lg-6 form-group">
                                <input type="text" placeholder="Token ID" required value = {tokenid} onChange = {(e)=>setTokenID(e.target.value)}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" placeholder="Amount" required value = {amount} onChange = {(e)=>setAmount(e.target.value)}/>
                            </div>

                        </div>
                    </div>
                    <div className="content-block">
                        <div className="row">
                            <div className="col-lg-12 form-group">
                                <textarea value = {description} placeholder="Retire message" onChange = {(e)=>setDescription(e.target.value)} />
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="cmn-btn">Retire your NFT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default RetireNFT;