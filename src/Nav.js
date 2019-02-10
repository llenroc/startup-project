import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'

class Nav extends React.Component {
	constructor (props) {
		super()
        window.web3 = new Web3(web3.currentProvider)
        this.state = {
            account: ''
        }

        this.getAccount()
    }

    async getAccount() {
        const myAccounts = await web3.eth.getAccounts()
        this.setState({account: myAccounts[0]})
    }

	render () {
		return (
			<div className="nav">
                <div className="color-grey">{this.state.account}</div>
            </div>
		)
	}
}

export default Nav
