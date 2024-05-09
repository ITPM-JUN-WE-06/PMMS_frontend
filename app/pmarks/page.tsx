import React from 'react'
import Layout from '../components/layout'
import button from '../components/button'


function presentatinMarkHome() {
  return (
    <div>
        <Layout>
            <div className=" bg-blue-50 rounded-md shadow-lg">
                <form>
                    <label>Group ID</label>
                    <input type="text" id="gid" />

                    <label>Prsenetaion Step</label>
                    <select name="prsStep" id="prsStep">
                        <option value="proposal">Proposal</option>
                        <option value="proposal">Progress 1</option>
                        <option value="proposal">Progress 2</option>
                        <option value="proposal">Final</option>
                    </select>
                   
                    <button>search</button>
                   
                   
                </form>
            </div>
        </Layout>
    </div>
  )
}

export default presentatinMarkHome
