import React from 'react';



function Portfolio() {
  return (
    <div id='portfolio'>
      <h2>
        Portfolio
      </h2>
      <section className="container">
        <div className="row">
          <div className="col-6 project" id='food-festival'>
            <a href='https://mjerich.com/food-festival/'>Food Festival</a>
            <a href='https://github.com/MJerich/food-festival' className="fa fa-github"><span>github</span></a>
          </div>
          <div className="col-6 project" id='javascript-quiz'>
          <a href='https://mjerich.com/code-quiz/'>Javascript Quiz</a>
            <a href='https://github.com/MJerich/code-quiz' className="fa fa-github"><span>github</span></a>
          </div>
          <div className="col-6 project" id='run-buddy'>
          <a href='https://MJerich.com/run-buddy/'>Run Buddy</a>
            <a href='https://github.com/MJerich/run-buddy' className="fa fa-github"><span>github</span></a>
          </div>
          <div className="col-6 project" id='taskmaster-pro'>
          <a href='https://mjerich.com/taskmaster-pro/'>Taskmaster Pro</a>
            <a href='https://github.com/MJerich/taskmaster-pro' className="fa fa-github"><span>github</span></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;