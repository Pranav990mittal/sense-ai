import { getAssessments } from "@/actions/interview"
import QuizList from "./_components/quiz-list";
import PerformanceChart from "./_components/performance-chart";
import StatsCards from "./_components/stats-cards";

const InterviewPage = async() => {
    const assessments=await getAssessments();
  return (
    <div>
        <div>
            <h1 className="text-6xl font-bold gradient-title mb-5">Interview Prepration</h1>
            <div>
                <StatsCards assessments={assessments}/>
                <PerformanceChart assessments={assessments}/>
                <QuizList assessments={assessments}/>
            </div>
        </div>
    </div>
  )
}

export default InterviewPage