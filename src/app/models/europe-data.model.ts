export interface Country {
    Name: string;
    Flag: string;
    Founded: number;
    population: number;
    PopulationRanks: number;
    area: number;
    GDP: string;
    Facts: {
      Fact1: string;
      Fact2: string;
      Fact3: string;
      Fact4: string;
      Fact5: string;
    }[];
  }
  
  export interface EuropeData {
    Europe: Country[];
  }