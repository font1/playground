class ClimbingPlanner {
    constructor() {
        this.sessions = [];
        this.statistics = {
            totalSessions: 0,
            totalClimbed: 0,
        };
    }

    addSession(date, duration, grade) {
        const session = { date, duration, grade };
        this.sessions.push(session);
        this.statistics.totalSessions += 1;
        this.statistics.totalClimbed += grade; // Assuming grade is a numerical value
    }

    renderWeeklyPlans() {
        const plans = this.sessions.reduce((acc, session) => {
            const weekNumber = this.getWeekNumber(new Date(session.date));
            if (!acc[weekNumber]) acc[weekNumber] = [];
            acc[weekNumber].push(session);
            return acc;
        }, {});

        return plans;
    }

    updateStatistics() {
        this.statistics.totalSessions = this.sessions.length;
        this.statistics.totalClimbed = this.sessions.reduce((sum, session) => sum + session.grade, 0);
    }

    deleteSession(date) {
        this.sessions = this.sessions.filter(session => session.date !== date);
        this.updateStatistics();
    }

    exportPlans() {
        const planText = this.sessions.map(session => `Date: ${session.date}, Duration: ${session.duration}, Grade: ${session.grade}`).join('\n');
        return planText;
    }

    getWeekNumber(d) {
        const oneJan = new Date(d.getFullYear(), 0, 1);
        const numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
        return Math.floor((numberOfDays + oneJan.getDay()) / 7) + 1;
    }
}

// Example usage:
const climbingPlanner = new ClimbingPlanner();
climbingPlanner.addSession('2026-02-01', 2, 5);
climbingPlanner.addSession('2026-02-02', 1.5, 6);
console.log(climbingPlanner.renderWeeklyPlans());
console.log(climbingPlanner.exportPlans());