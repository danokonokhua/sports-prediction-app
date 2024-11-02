// src/types/index.ts
export interface Team {
    id: string;
    name: string;
    logo?: string;
  }
  
  export interface Match {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    date: Date;
    competition: string;
    stats: MatchStats;
  }
  
  export interface MatchStats {
    score?: {
      home: number;
      away: number;
    };
    possession?: {
      home: number;
      away: number;
    };
    shots?: {
      home: number;
      away: number;
    };
    // Add more stats based on sport
  }
  
  export interface Prediction {
    matchId: string;
    homeWinProbability: number;
    drawProbability: number;
    awayWinProbability: number;
    confidence: number;
    factors: PredictionFactors;
  }
  
  export interface PredictionFactors {
    homeAdvantage: number;
    recentForm: number;
    headToHead: number;
    currentPerformance: number;
    seasonTrend: number;
  }