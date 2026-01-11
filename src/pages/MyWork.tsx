// ... existing imports
import { 
  Briefcase, 
  IndianRupee, 
  Clock, 
  CheckCircle2, 
  XCircle,
  ExternalLink,
  AlertCircle,
  Search // Added Search Icon
} from 'lucide-react';
import { Input } from '@/components/ui/input'; // Ensure this exists in your UI folder
import { useDebounce } from '@/hooks/useDebounce'; // Import our new hook

// ... interfaces

const MyWork = () => {
  const { profile } = useAuth();
  const [works, setWorks] = useState<WorkSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  
  // 1. Add Search State
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  // ... fetchWorks useEffect remains the same

  // 2. Updated Filtering Logic
  const filteredWorks = works.filter((work) => {
    const matchesStatus = filter === 'all' || work.status === filter;
    const matchesSearch = work.campaignTitle
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // ... stats and getStatus helpers remain the same

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            My Work
          </h1>
          
          {/* 3. Search Input Field */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Section remains the same */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
           {/* ... existing stats cards ... */}
        </div>

        <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
            <TabsTrigger value="approved">Approved ({stats.approved})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected ({stats.rejected})</TabsTrigger>
          </TabsList>

          <TabsContent value={filter}>
            {loading ? (
              <div className="space-y-4">
                 {/* ... existing skeleton loading ... */}
              </div>
            ) : filteredWorks.length === 0 ? (
              <div className="text-center py-16">
                <Briefcase className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h2 className="font-display text-xl font-bold text-foreground mb-2">
                  {debouncedSearch ? "No matching results" : "No Work Found"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {debouncedSearch 
                    ? `We couldn't find anything matching "${debouncedSearch}"`
                    : filter === 'all' 
                      ? "You haven't submitted any work yet" 
                      : `No ${filter} submissions`}
                </p>
                {!debouncedSearch && (
                  <Link to="/campaigns">
                    <Button>Browse Campaigns</Button>
                  </Link>
                )}
                {debouncedSearch && (
                  <Button variant="outline" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredWorks.map((work) => (
                  /* ... existing Card rendering ... */
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default MyWork;