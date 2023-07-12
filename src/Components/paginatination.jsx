import React from 'react'

function paginatination() {
  return (
    <div>
        <div className="goTo"  style={{marginTop:'15px',backgroundColor: '#f7f7f7'}}>
            <button className="prev">
                <span className="arrow-left">&larr;</span>Prev
            </button>
            <div className="numbers" >
                <button>1</button>
                <button>2</button>
                <button>...</button>
                <button>5</button>
                <button>6</button>
            </div>
            <button className="next">
                Next<span className="arrow-right">&rarr;</span>
            </button>
        </div>
    </div>
  )
}

export default paginatination