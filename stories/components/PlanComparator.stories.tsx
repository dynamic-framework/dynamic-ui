/* eslint-disable react/no-array-index-key */
import { Meta, StoryObj } from '@storybook/react-vite';
import DButton from '../../src/components/DButton/DButton';
import DIcon from '../../src/components/DIcon/DIcon';
import './custom.scss';
import DBox from '../../src/components/DBox';

const fourPlanFeatures = [
  {
    name: 'Storage', free: '1 GB', basic: '10 GB', pro: '50 GB', enterprise: 'Unlimited',
  },
  {
    name: 'Users', free: '1', basic: '5', pro: '10', enterprise: 'Unlimited',
  },
  {
    name: 'Support', free: false, basic: true, pro: true, enterprise: true,
  },
  {
    name: '24/7 Phone Support', free: false, basic: false, pro: false, enterprise: true,
  },
];

const meta: Meta = {
  title: 'Design System/Patterns/Plan Comparator',
  parameters: {
    docs: {
      description: {
        component: `
This story showcases a plan comparator design, which can be used to compare different subscription plans or product tiers.
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const FourPlans: StoryObj = {
  render: () => (
    <DBox>
      <table className="plan-comparator-table">
        <thead>
          <tr>
            <th>{' '}</th>
            <th>
              <h5 className="plan-title">Free</h5>
              <p className="plan-price">$0/mo</p>
            </th>
            <th>
              <h5 className="plan-title">Basic</h5>
              <p className="plan-price">$10/mo</p>
            </th>
            <th className="featured">
              <h5 className="plan-title">Pro</h5>
              <p className="plan-price">$20/mo</p>
            </th>
            <th>
              <h5 className="plan-title">Enterprise</h5>
              <p className="plan-price">$50/mo</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {fourPlanFeatures.map((feature, index) => (
            <tr key={index}>
              <td className="feature-name">{feature.name}</td>
              <td>{feature.free ? <DIcon size="1rem" icon="check-circle" className="text-success" /> : <DIcon icon="x" className="text-danger" />}</td>
              <td>{feature.basic ? <DIcon size="1rem" icon="check-circle" className="text-success" /> : <DIcon icon="x" className="text-danger" />}</td>
              <td>{feature.pro ? <DIcon size="1rem" icon="check-circle" className="text-success" /> : <DIcon icon="x" className="text-danger" />}</td>
              <td>{feature.enterprise ? <DIcon size="1rem" icon="check-circle" className="text-success" /> : <DIcon icon="x" className="text-danger" />}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>{' '}</td>
            <td>
              <DButton
                color="primary"
                variant="outline"
                className="w-100"
                text="Choose Plan"
              />
            </td>
            <td>
              <DButton
                color="primary"
                variant="outline"
                className="w-100"
                text="Choose Plan"
              />
            </td>
            <td>
              <DButton
                color="primary"
                className="w-100"
                text="Choose Plan"
              />
            </td>
            <td>
              <DButton
                color="primary"
                variant="outline"
                className="w-100"
                text="Choose Plan"
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </DBox>
  ),
};
