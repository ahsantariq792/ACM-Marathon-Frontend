import React from 'react'

const CreateNewProject=()=>{
    return(
        <>


        <div className='parentcreateNewProject'>
          <div className='headCreateNewProject'>
            <h1>CREATE NEW PROJECT</h1>
  
          </div>
          <div className='createNewProject'>
  
            <div className='childcreateNewProject'>
              <p>PROJECT NAME</p>
              <input></input>
            </div>
            <button className='newProjectButton'> ADD</button>
  
          </div>
  
        </div>
      </>
    )
}

export default CreateNewProject;