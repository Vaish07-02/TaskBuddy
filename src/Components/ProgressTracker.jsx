import React from 'react'

export default function ProgressTracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const highPriorityPending = tasks.filter(
    (task) => !task.completed && task.priority === 'high'
  ).length;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h2>Your Progress</h2>
        <span className="progress-percent">{percent}%</span>
      </div>

      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <div className="progress-stats">
        <div className="stat-card">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Total Tasks</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{completed}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{total - completed}</span>
          <span className="stat-label">Remaining</span>
        </div>
      </div>

      {highPriorityPending > 0 && (
        <p className="progress-warning">
          ⚠ {highPriorityPending} high priority task{highPriorityPending > 1 ? 's' : ''} still pending
        </p>
      )}

      {total > 0 && percent === 100 && (
        <p className="progress-success">🎉 All tasks completed. Great job!</p>
      )}
    </div>
  );
}