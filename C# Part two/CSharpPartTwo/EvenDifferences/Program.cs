using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EvenDifferences
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] numbers = input.Split(' ');

            Console.WriteLine(FindSum(numbers.Select(decimal.Parse).ToArray()));
        }

        private static double FindSum(decimal[] numbers)
        {
            decimal[] differences = new decimal[numbers.Length];
            //List<decimal> differences = new List<decimal>();
            for (int i = 1; i < numbers.Length; i++)
            {
                if ((Math.Abs(numbers[i - 1] - numbers[i])) % 2 == 0)
                {
                    //differences.Add(Math.Abs(numbers[i] - numbers[i - 1]));
                    differences[i - 1] = Math.Abs(numbers[i] - numbers[i - 1]);
                    if (i + 2 <= numbers.Length)
                    {
                        i += 1;
                    }
                }
                else
                {
                    //differences.Add(Math.Abs(numbers[i] - numbers[i - 1]));
                    differences[i - 1] = Math.Abs(numbers[i] - numbers[i - 1]);
                    if (i + 1 <= numbers.Length)
                    {
                        //i += 1;
                    }
                }
            }
            double result = (double)differences.Where(num => num % 2 == 0).Sum();
            return result;
        }
    }