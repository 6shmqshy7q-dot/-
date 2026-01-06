// Mock database for demo purposes - no real database connection
export const drizzleDb = {
  // Mock insert
  insert: () => ({
    values: () => ({
      returning: () => Promise.resolve([{
        id: 1,
        email: 'demo@sleep-tracker.com',
        username: 'demo用户',
        createdAt: new Date().toISOString()
      }])
    })
  }),

  // Mock select
  select: () => ({
    from: () => ({
      where: () => ({
        limit: () => Promise.resolve([])
      }),
      orderBy: () => Promise.resolve([])
    })
  })
};

console.log('🎭 Sleep Tracker running in DEMO mode - no database connection required');