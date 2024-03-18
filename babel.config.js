plugins: [
   [
     'module-resolver',
     {
       root: ['./src'],
       extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
       alias: {
	  '@components': './src/components/index',
	  '@modules': './src/modules',
         '@views': './src/views',
       },
     },
   ],
 ],