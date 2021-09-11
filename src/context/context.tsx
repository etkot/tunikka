import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContextType } from '../types';

const createCtx = (): any => {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  const useCtx = (): ContextType => {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider];
};

const [useCtx, CtxProvider] = createCtx();

const AppContextProvider = ({ children }: any): JSX.Element | null => {
  const [tunikka, setTunikka] = useState<any>(null);

  useEffect(() => {
    setTimeout(async () => {
      const tunikkaData = await getTunikka(true);
      setTunikka(tunikkaData);
    }, 2000);
  });

  let lastTunikka: any;
  const getTunikka = async (allowLast: boolean) => {
    const res = await axios.get<any>('http://data.itsfactory.fi/journeys/api/1/vehicle-activity');
    let v = res.data.body.find((v: any) => v.monitoredVehicleJourney.vehicleRef === '56920_5');

    if (!v) {
      if (allowLast && lastTunikka) {
        v = lastTunikka;
      } else {
        throw new Error('Tunikka not found');
      }
    }

    const loc = v.monitoredVehicleJourney.vehicleLocation;
    const bearing = v.monitoredVehicleJourney.bearing;

    lastTunikka = v;

    return {
      loc,
      bearing,
    };
  };

  const defaultValue = {
    tunikka,
  };

  return <CtxProvider value={defaultValue}>{children}</CtxProvider>;
};

export { useCtx, AppContextProvider };
