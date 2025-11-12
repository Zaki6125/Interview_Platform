// import Navbar from '../components/Navbar'
// import {PROBLEMS} from '../data/problem'
// import { Code2Icon } from 'lucide-react'
// import {getDifficultyBadgeClass} from '../lib/utils'
// function ProblemPage() {
//     const problem = Object.values(PROBLEMS)
//   return (
//     <div className='min-h-screen bg-base-200'>
//      <Navbar/>
//      <div className='max-w-6xl mx-auto px-4 py-12'>
//         {/*HEADER */}
//         <div className='mb-8'>
//          <h1 className='text-4xl font-bold mb-2'>Practice Problems</h1>
//          <p className='text-base-content/70'>
//          Sharpen your coding skills with these curated problems
//          </p>
//         </div>
//         {/*PROBLEMS LIST*/}
//         <div className='space-y-4'>
//             {problem.map(problem =>(
//                 <Link key={problem.id}
//                     to={`/ProblemPage/${problem.id}`}
//                     className="card bg-base-100 hover:scale=[1.01] transition-transform"
//                     >
//                        <div className='card-body'>
//                         <div className='flex items-center justify-between gap-4'>
//                             {/* LEFT Side */}
//                             <div className='flex-1'>
//                                 <div className='flex items-center gap-3 mb-2'>
//                                     <div className='size-12 rounded-lg bg-primary/10 flex items-center justify-center'>
//                                     <Code2Icon className='size-6 text-primary'/>
//                                     </div>
//                                     <div className='flex-1'>
//                                        <div className='flex items-center gap-2 mb-1'>

//                                         <h2 className='text-xl font-bold'>{problem.title}</h2>
//                                         <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
//                                             {problem.difficulty}
//                                         </span>
//                                        </div>
//                                        <p className='text-sm text-base-content/60 '>{problem.category}</p>
//                                     </div>

//                                 </div>
//                             </div>
//                             </div>
//                             </div> 
                
//                 </Link>
//             ))}
//         </div>

//      </div>
//     </div>
//   )
// }

// export default ProblemPage

import Navbar from '../components/Navbar';
import { PROBLEMS } from '../data/problem';
import { ChevronsRightIcon, Code2Icon } from 'lucide-react';
import { getDifficultyBadgeClass } from '../lib/utils';
import { Link } from 'react-router-dom'; // ✅ Added import

function ProblemPage() {
  const problems = Object.values(PROBLEMS);
  const easyProblemCount = problems.filter(p =>p.difficulty === "Easy").length; // ✅ renamed for clarity
  const mediumProblemCount = problems.filter(p =>p.difficulty === "Medium").length; // ✅ renamed for clarity
  const hardProblemCount = problems.filter(p =>p.difficulty === "Hard ").length; // ✅ renamed for clarity
   
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/ProblemPage/${problem.id}`}
              className="card bg-base-100 hover:scale-105 transition-transform"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT Side */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold ">{problem.title}</h2>
                          <span
                            className={`badge ${getDifficultyBadgeClass(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60">
                          {problem.category}
                        </p>
                      </div>
                    </div>
                    <p className='text-base-content/80 mb-3'>{problem.description.text}</p>
                  </div>
                  {/* RIGHT SIDE*/}
                  <div className='flex  items-center gap-2 text-primary'>
                     <span className='font-medium'>Solve</span>
                     <ChevronsRightIcon className='size-5'/>

                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/*STATS FOOTER */}
        <div className='mt-12 card bg-base-100 shadow-lg'>
            <div className='card-body'>
                <div className='stats stats-vertical lg:stats-horizontal'>
                    <div className='stat'>
                        <div className='stat-title'>Total Problems</div>
                        <div className='stat-value text-primary'>{problems.length}</div>
                    </div>
                    <div className='stat'>
                        <div className='stat-title'>Easy</div>
                        <div className='stat-value text-success'>{easyProblemCount}</div>
                    </div>
                    <div className='stat'>
                        <div className='stat-title'>Medium</div>
                        <div className='stat-value text-warning'>{mediumProblemCount}</div>
                    </div>
                    <div className='stat'>
                        <div className='stat-title'>Hard</div>
                        <div className='stat-value text-error'>{hardProblemCount}</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemPage;

