import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';

interface RecentInvoicesProps {
    onViewAll: () => void;
    onSelectInvoice: (invoice: any) => void;
}

export const RecentInvoices = React.memo(function RecentInvoices({ onViewAll, onSelectInvoice }: RecentInvoicesProps) {
    const invoices = [
        { id: "INV-2025-009", date: "Dec 28, 2025", dueDate: "Jan 15, 2026", amount: "৳ 450,000", status: "Pending", items: "Custom Kraft Boxes", paymentDate: null },
        { id: "INV-2025-008", date: "Nov 20, 2025", dueDate: "Dec 20, 2025", amount: "৳ 210,000", status: "Overdue", items: "Food Containers", paymentDate: null },
        { id: "INV-2025-007", date: "Dec 10, 2025", dueDate: "Jan 10, 2026", amount: "৳ 835,000", status: "Paid", items: "Premium Coffee Cups", paymentDate: "Dec 15, 2025" },
    ];

    return (
        <div className="bg-white rounded-[40px] md:rounded-[60px] border border-black/5 shadow-sm overflow-hidden">
            <div className="p-6 md:p-10 border-b border-zinc-50 flex items-center justify-between bg-zinc-50/30">
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black">
                    <FileText className="size-5" />
                </div>
                <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight">Recent Invoices</h3>
            </div>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewAll}
                className="px-4 md:px-6 py-2 md:py-3 bg-zinc-100 text-black rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
                View All
            </motion.button>
            </div>
            <motion.div 
                className="divide-y divide-zinc-100"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
            >
            {invoices.map((inv, i) => {
                const isOverdue = inv.status === 'Overdue';
                const overdueDays = isOverdue ? Math.floor((new Date('2026-01-01').getTime() - new Date(inv.dueDate).getTime()) / (1000 * 3600 * 24)) : 0;

                return (
                    <motion.div 
                        key={i} 
                        layout
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ backgroundColor: "rgba(250, 250, 250, 0.8)", x: 5 }}
                        onClick={() => onSelectInvoice(inv)} 
                        className="p-6 md:p-8 flex items-center justify-between cursor-pointer transition-colors group"
                    >
                    <div className="flex items-center gap-6">
                        <div className={`size-2 rounded-full ${inv.status === 'Paid' ? 'bg-emerald-500' : isOverdue ? 'bg-red-500 animate-pulse' : 'bg-[#fabf37]'}`} />
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{inv.id}</p>
                            <p className="text-base font-black uppercase tracking-tight">{inv.amount}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                                <p className="text-[10px] font-bold text-zinc-500">{inv.items}</p>
                                {isOverdue && (
                                    <span className="text-[8px] font-black uppercase tracking-widest text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                                        {overdueDays} Days Overdue
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden md:block">
                            <p className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest inline-block ${inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-600' : inv.status === 'Overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-700'}`}>
                                {inv.status}
                            </p>
                            <p className="text-[9px] font-bold text-zinc-400 mt-1">Due: {inv.dueDate}</p>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            className="size-10 rounded-full border border-black/5 flex items-center justify-center transition-all"
                        >
                            <ChevronRight className="size-4" />
                        </motion.button>
                    </div>
                    </motion.div>
                );
            })}
            </motion.div>
        </div>
    );
});