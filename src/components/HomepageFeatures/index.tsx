import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DevOps',
    Svg: require('@site/static/img/what-is-devops.svg').default,
    description: (
      <>
        Корисні матеріали та посилання на ресурси, які використовуються автором у процесі розробки, впровадження та супроводу продуктів.
        Наголос робиться на матеріалах, пов'язаних з платформою .NET.
      </>
    ),
  },
  {
    title: 'Знання, уміння та навички',
    Svg: require('@site/static/img/personality.svg').default,
    description: (
      <>
        Саморозвиток - процес роботи над собою у всіх напрямках: фізичному, духовному, професійному, соціальному. Самовдосконалення допомагає адаптуватися до нових обставин і долати труднощі, розуміти свою мотивацію та бажання, ставити та досягати мети.
      </>
    ),
  },
  {
    title: 'Користувачам пристроїв',
    Svg: require('@site/static/img/pc-employee.svg').default,
    description: (
      <>
        Матеріали із загальних питань, які можуть допомогти користувачам більш ефективно виконувати свою роботу з використанням комп'ютерних пристроїв.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
