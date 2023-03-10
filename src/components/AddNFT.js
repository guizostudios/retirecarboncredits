import { useState } from 'react';

const AddNFT = props => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [to, setTo] = useState();
    const [description, setDescription] = useState('')
    const [region, setRegion] = useState('')
    const [emission, setEmissionType] = useState('')


    const submitHandler = (event) => {
        event.preventDefault();
        props.addToNFT(name, description, image, to, region, emission);
        setName('');
        setDescription('');
        setImage('');
        setTo('');
        setRegion('');
        setEmissionType('');
    }


    return (

        <section id = "0" className=" pt-120 pb-120" style = {{backgroundColor: "#2C4B5B"}}>
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title" style = {{color: "#FFFFFF"}}>Mint NFT</h2>
                </div>
                <form className="nft-form" onSubmit = {submitHandler}>
                    <div className="content-block">
                    </div>
                    <div className="content-block">
                        <div className="row">
                            <div className="col-lg-6 form-group">
                                <input type="text" placeholder="NFT Name" required value = {name} onChange = {(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" placeholder="IPFS URL" required value = {image} onChange = {(e)=>setImage(e.target.value)}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" placeholder="To" required value = {to} onChange = {(e)=>setTo(e.target.value)} />
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" placeholder="Region" required value = {region} onChange = {(e)=>setRegion(e.target.value)}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" placeholder="Emission type" required value = {emission} onChange = {(e)=>setEmissionType(e.target.value)} />
                            </div>
                        
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="row">
                            <div className="col-lg-12 form-group">
                                <textarea value = {description} placeholder="NFT Methodology Description" onChange = {(e)=>setDescription(e.target.value)} />
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="cmn-btn">Mint your NFT</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default AddNFT;