using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BitsToBits
{
    using Microsoft.Win32;
    using Wintellect.PowerCollections;

    class Program
    {
        private static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<int> numbers = new List<int>(n);
            for (int i = 0; i < n; i++)
            {
                numbers.Add(int.Parse(Console.ReadLine()));
            }

            StringBuilder res = new StringBuilder();
            foreach (var number in numbers)
            {
                res.Append(PadLeftWith30(number));
            }

            Console.WriteLine(FindLongestSequence(res.ToString(),'0'));
            Console.WriteLine(FindLongestSequence(res.ToString(),'1'));
        }

        private static string PadLeftWith30(int input)
        {
            string numberAsBinary = Convert.ToString(input, 2);
            String result = Convert.ToString(Convert.ToInt32(input.ToString(), 10), 2);
            return result.PadLeft(30, '0');
        }
        
        private static int FindLongestSequence(string input, char search)
        {
            int counter = 0;

            List<int> sequences = new List<int>();
            for (int i = 0; i < input.Length; i++)
            {
                if (i + 1 == input.Length && input[i] == search)
                {
                    counter += 1;
                    sequences.Add(counter);
                }
                else if (input[i] == search)
                {
                    counter += 1;
                }
                else
                {
                    sequences.Add(counter);
                    counter = 0;
                }
            }

            return sequences.Max();
        }
    }
}
