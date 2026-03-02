import { Shield, CheckCircle } from 'lucide-react';
import { REASSURANCE_TEXT } from '../config/constants';

export const ReassuranceBar = () => {
  return (
    <div className="reassurance-bar flex items-center justify-center gap-2">
      <Shield className="w-4 h-4 text-[#4CAF50]" />
      <span>{REASSURANCE_TEXT}</span>
    </div>
  );
};

export default ReassuranceBar;
